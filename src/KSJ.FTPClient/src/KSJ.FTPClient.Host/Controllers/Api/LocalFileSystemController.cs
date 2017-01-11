using KSJ.FTPClient.Core.LocalFileSystem;
using Microsoft.AspNetCore.Mvc;

namespace KSJ.FTPClient.Host.Controllers.Api
{
    public class LocalFileSystemController : ApiController
    {
        private readonly IHandleLocalFilesystem _localFilesystem;

        public LocalFileSystemController(IHandleLocalFilesystem localFilesystem)
        {
            _localFilesystem = localFilesystem;
        }
        [HttpGet]
        public IActionResult GetInitialFolder()
        {
            return Ok(_localFilesystem.GetInitialFolderEntries());
        }

        [HttpGet("{folder}", Name = "GetEntries")]
        public IActionResult GetFolderContent(string folder)
        {
            return Ok(_localFilesystem.GetFolderEntries(folder));
        }
    }
}
