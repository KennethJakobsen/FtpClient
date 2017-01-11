using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KSJ.FTPClient.Core.Model
{
    public interface IFileSystemEntry
    {
         string Name { get; set; }
         string Path { get; set; }
    }
}
