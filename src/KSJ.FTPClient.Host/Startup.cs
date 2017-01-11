using System;
using System.IO;
using System.Reflection;
using CoreOWINSelfHost.System.ContractResolvers;
using LightInject;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using LightInject.Microsoft.DependencyInjection;
using KSJ.FTPClient.Core.IoC;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.FileProviders;

namespace CoreOWINSelfHost
{

    internal class Startup
    {
        private IConfigurationRoot _configuration;

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
            .SetBasePath(env.ContentRootPath)
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
            .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
            .AddEnvironmentVariables();
            _configuration = builder.Build();
        }
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            
            loggerFactory.AddConsole(_configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
            app.UseDefaultFiles();
            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Directory.GetCurrentDirectory() + @"\static"),
                RequestPath = new PathString("/Static")
            });

            app.UseSignalR();
            app.UseWebSockets();
        }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            var settings = new JsonSerializerSettings {ContractResolver = new SignalRContractResolver()};

            var serializer = JsonSerializer.Create(settings);

            services.Add(new ServiceDescriptor(typeof(JsonSerializer),
                         provider => serializer,
                         ServiceLifetime.Transient));

            services.AddSignalR(options =>
            {
                options.Hubs.EnableDetailedErrors = true;
            });
            services.AddMvc();
            var bootstrapper = new Bootstrapper();
            bootstrapper.Bootstrap();
            var container = bootstrapper.Container;
            return container.CreateServiceProvider(services);

        }
    }
}