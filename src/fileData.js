import React from 'react';

const FileData = ({ folder, toggleFolder, addFile }) => {
  return (
    <li>
      <div>
        <button onClick={() => toggleFolder(folder.id)}>
          {folder.isExpanded ? '-' : '+'}
        </button>
        {folder.name}
        {folder.type === 'folder' && (
          <button onClick={() => addFile(folder.id)}>+</button>
        )}
      </div>
      {folder.isExpanded && folder.children && (
        <ul>
          {folder.children.map(child => (
            <FileData
              key={child.id}
              folder={child}
              toggleFolder={toggleFolder}
              addFile={addFile}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default FileData
