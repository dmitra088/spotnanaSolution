export const fileStructure = [
    {
      id: 1,
      name: 'Folder 1',
      type: 'folder',
      isExpanded: false,
      children: [
        {
          id: 2,
          name: 'Subfolder 1',
          type: 'folder',
          isExpanded: false,
          children: [
            { id: 3, name: 'File 1', type: 'file' },
            { id: 4, name: 'File 2', type: 'file' },
          ],
        },
      ],
    },
    {
      id: 5,
      name: 'Folder 2',
      type: 'folder',
      isExpanded: false,
      children: [
        { id: 6, name: 'File 3', type: 'file' },
        { id: 7, name: 'File 4', type: 'file' },
      ],
    },
  ];
  