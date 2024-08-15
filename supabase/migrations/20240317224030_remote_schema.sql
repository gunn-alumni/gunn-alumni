drop policy "Public spotlights are viewable by everyone." on "public"."spotlights";

alter table "public"."spotlights" drop constraint "spotlights_id_fkey";

alter table "public"."profiles" add column "email" text;

alter table "public"."spotlights" drop column "index";

alter table "public"."spotlights" add column "person_id" bigint;

alter table "public"."spotlights" add column "url" text default ''::text;

alter table "public"."spotlights" alter column "author" set not null;

alter table "public"."spotlights" alter column "content" set not null;

alter table "public"."spotlights" alter column "created_at" set default timezone('utc'::text, now());

alter table "public"."spotlights" alter column "description" set not null;

alter table "public"."spotlights" alter column "grad_year" set not null;

alter table "public"."spotlights" alter column "id" add generated always as identity;

alter table "public"."spotlights" alter column "id" set data type bigint using "id"::bigint;

alter table "public"."spotlights" alter column "preferred_name" set not null;

alter table "public"."spotlights" alter column "thumbnail" set not null;

alter table "public"."spotlights" alter column "updated_at" set default timezone('utc'::text, now());

alter table "public"."spotlights" alter column "updated_at" drop not null;

alter table "public"."spotlights" add constraint "spotlights_person_id_fkey" FOREIGN KEY (person_id) REFERENCES people(index) ON DELETE CASCADE not valid;

alter table "public"."spotlights" validate constraint "spotlights_person_id_fkey";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.spotlights_update_updated_at()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
BEGIN
  NEW.updated_at=CURRENT_TIMESTAMP AT TIME ZONE 'UTC';
  RETURN NEW;
END;
$function$
;

CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  insert into profiles (id, preferred_name, created_at)
  values (new.id, new.raw_user_meta_data ->> 'preferred_name', new.raw_user_meta_data ->> 'created_at');
  return new;
end;
$function$
;

create policy "Enable read access for all users"
on "public"."spotlights"
as permissive
for select
to public
using (true);


CREATE TRIGGER spotlights_updated_at_trigger AFTER UPDATE ON public.spotlights FOR EACH ROW EXECUTE FUNCTION spotlights_update_updated_at();


