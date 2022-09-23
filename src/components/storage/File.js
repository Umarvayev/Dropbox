import React from 'react';
import { DocumentIcon } from '@heroicons/react/20/solid';

const File = ({ file }) => {
    return (
        <div className='doc'>
        <a href={file.url}  className="flex items-center">
            <DocumentIcon
                className="h-9  w-9 mr-2 text-dark" 
                aria-hidden="true"
            />
            <span className="ml-1 text-lg font-base">{ file.name }</span>
        </a>
        </div>
    );
};

export default File;