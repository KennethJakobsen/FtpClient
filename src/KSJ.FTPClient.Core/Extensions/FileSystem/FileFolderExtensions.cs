using System.IO;
using KSJ.FTPClient.Core.Model;
using Fl = KSJ.FTPClient.Core.Model.File;

namespace KSJ.FTPClient.Core.Extensions.FileSystem
{
    public static class FileFolderExtensions
    {
        public static DirectoryInfo ToDirectoryInfo(this Folder folder)
        {
            return new DirectoryInfo(folder.Path);
        }
        public static DirectoryInfo ToFileInfo(this Fl file)
        {
            return new DirectoryInfo(file.Path);
        }

        public static Folder ToFolder(this DirectoryInfo di)
        {
            return new Folder() { Name = di.Name, Path = di.FullName };
        }

        public static Fl ToFile(this FileInfo fi)
        {
            return new Fl() { Name = fi.Name, Path = fi.FullName};
        }
    }
}
