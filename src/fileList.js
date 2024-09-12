import React, { useState } from 'react';
import FileData from './fileData';
import { fileStructure } from './initialData';

const FileExplorer = () => {
  const [structure, setStructure] = useState(fileStructure);
  const [newFileName, setNewFileName] = useState('');

  const toggleFolder = id => {
    const toggle = folders =>
      folders.map(folder => {
        if (folder.id === id) {
          folder.isExpanded = !folder.isExpanded;
        }
        if (folder.children) {
          folder.children = toggle(folder.children);
        }
        return folder;
      });

    setStructure(toggle(structure));
  };

  const addFile = (parentId) => {
    if (!newFileName) {
      alert("Please enter a file name");
      return;
    }

    const add = folders =>
      folders.map(folder => {
        if (folder.id === parentId && folder.type === 'folder') {
          folder.children = folder.children || [];
          folder.children.push({
            id: Math.random(),
            name: newFileName,
            type: 'file',
          });
        }
        if (folder.children) {
          folder.children = add(folder.children);
        }
        return folder;
      });

    setStructure(add(structure));
    setNewFileName('');
  };

  return (
    <div>
      <input
        type="text"
        value={newFileName}
        onChange={e => setNewFileName(e.target.value)}
        placeholder="New file name"
      />
      <ul>
        {structure.map(folder => (
          <FileData
            key={folder.id}
            folder={folder}
            toggleFolder={toggleFolder}
            addFile={addFile}
          />
        ))}
      </ul>
    </div>
  );
};

export default FileExplorer;
