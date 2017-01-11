using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KSJ.FTPClient.Core.Model
{
    public class Folder : IFileSystemEntry
    {
        public string Name { get; set; }
        public string Path { get; set; }
    }
}
