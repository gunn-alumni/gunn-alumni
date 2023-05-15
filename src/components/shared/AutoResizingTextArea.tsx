import {TextareaHTMLAttributes, useRef} from 'react';


// Modified from https://github.com/ky28059/ky28059.github.io/blob/main/components/AutoResizingTextArea.tsx
export default function AutoResizingTextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const {onChange, ...textAreaProps} = props;

    return (
        <textarea
            ref={textAreaRef}
            onChange={(e) => {
                e.stopPropagation();
                onChange?.(e);

                // <textarea> auto-resizing
                // https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize
                const textArea = textAreaRef.current;
                if (!textArea) return;
                textArea.style.height = 'auto';
                textArea.style.height = textArea.scrollHeight + 'px';
            }}
            {...textAreaProps}
        />
    )
}
