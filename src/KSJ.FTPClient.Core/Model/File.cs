﻿namespace KSJ.FTPClient.Core.Model
{
    public class File : IFileSystemEntry
    {
        public File()
        {
            IsFile = true;
        }
        public string Name { get; set; }
        public string Path { get; set; }
        public bool IsFile { get; private set; }
    }
}
