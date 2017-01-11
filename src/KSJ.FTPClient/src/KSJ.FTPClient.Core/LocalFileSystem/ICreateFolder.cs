using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KSJ.FTPClient.Core.Model;

namespace KSJ.FTPClient.Core.LocalFileSystem
{
    public interface ICreateFolder
    {
        Folder Create(string path);
    }
}
