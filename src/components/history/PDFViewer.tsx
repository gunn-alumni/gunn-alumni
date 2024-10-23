// components/historyPDFViewer.tsx
import React from 'react';

interface PDFViewerProps {
    fileUrl: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ fileUrl }) => {
    return (
        <div style={{ height: '600px' }}>
            <iframe
                src={fileUrl}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="PDF Viewer"
            ></iframe>
        </div>
    );
};

export default PDFViewer;
