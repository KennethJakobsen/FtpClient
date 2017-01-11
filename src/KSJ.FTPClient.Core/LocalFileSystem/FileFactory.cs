using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using KSJ.FTPClient.Core.Extensions.FileSystem;
using File = KSJ.FTPClient.Core.Model.File;

namespace KSJ.FTPClient.Core.LocalFileSystem
{
    public class FileFactory : ICreateFile
    {
        public File Create(string path)
        {
            var fi = new FileInfo(path);
            return fi.ToFile();
        }
    }
}
