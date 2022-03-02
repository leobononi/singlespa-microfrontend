import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import { HTMLLayoutData } from "single-spa-layout/dist/types/isomorphic/constructRoutes";

let custom = {} as HTMLLayoutData;
custom.errors = {
  navError: '<span style="color:#FFF">Error toolbar app!</span>',
  bodyError: '<span style="color:#FFF">Error body app!</span>',
  angularAppError: '<div style="color:white; margin: auto; width: 50%; text-align:center; font-size:4.2em"><span style="color:#FFF">Error angular app =!</span></div>',
  vueAppError: '<div style="margin: auto; width: 50%; text-align:center; font-size:4.2em"><span style="color:#42b983">V..vvv..vvuu.....uuu. =X</span></div>',
  reactAppError: '<div style="margin: auto; width: 50%; text-align:center; font-size:4.2em"><span style="color:#42b983">Reacterrrr zzzZZZZzzZ =X</span></div>'
}
custom.loaders = {
  navLoader: '<span style="color:#FFF">Carregando toolbar...</span>',
  mainLoader: '<span style="color:#FFF">Carregando conteúdo principal...</span>',
  angularAppLoader: '<div style="color:white; margin: auto; width: 50%; text-align:center; font-size:4.2em"><i class="fas fa-spinner"></i><div>',
  vueAppLoader: '<div style="color:#42b983; margin: auto; width: 50%; text-align:center; font-size:4.2em"><i class="fas fa-spinner"></i><div>',
  reactAppLoader: '<div style="color:#61dafb; margin: auto; width: 50%; text-align:center; font-size:4.2em"><i class="fas fa-spinner"></i><div>'
}

const routes = constructRoutes(
  document.querySelector("#single-spa-layout") as HTMLTemplateElement, custom
);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
console.log(routes);
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
console.log(applications);
layoutEngine.activate();
start();
