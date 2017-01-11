using Microsoft.AspNetCore.Mvc;

namespace KSJ.FTPClient.Host.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
