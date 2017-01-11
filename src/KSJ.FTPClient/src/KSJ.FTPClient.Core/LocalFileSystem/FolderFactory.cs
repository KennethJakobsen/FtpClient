using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using KSJ.FTPClient.Core.Extensions.FileSystem;
using KSJ.FTPClient.Core.Model;

namespace KSJ.FTPClient.Core.LocalFileSystem
{
    public class FolderFactory : ICreateFolder
    {
        public Folder Create(string path)
        {
            var di = new DirectoryInfo(path);
            return di.ToFolder();
        }
    }
}
