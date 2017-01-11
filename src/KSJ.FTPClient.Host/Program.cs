using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;

namespace CoreOWINSelfHost
{
    public class Program
    {
        
        public static void Main(string[] args)
        {
            var di = new DirectoryInfo(Directory.GetCurrentDirectory());
            var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(di.FullName)
                .UseStartup<Startup>()
                .Build();
            host.Run();
        }
    }
}
