import * as THREE from "three";
import {GUI} from "three/examples/jsm/libs/lil-gui.module.min"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as OBC from "openbim-components";

// IFC viewer
const viewer = new OBC.Components()
const sceneComponent = new OBC.SimpleScene(viewer)
sceneComponent.setup()
viewer.scene = sceneComponent
const scene = sceneComponent.get()
scene.background = null

const viewerContainer = document.getElementById("viewer-container") as HTMLDivElement
const rendererComponent = new OBC.PostproductionRenderer(viewer, viewerContainer)
viewer.renderer = rendererComponent

const cameraComponent = new OBC.OrthoPerspectiveCamera(viewer)
viewer.camera = cameraComponent

const raycasterComponent = new OBC.SimpleRaycaster(viewer)
viewer.raycaster = raycasterComponent

viewer.init()
cameraComponent.updateAspect()
rendererComponent.postproduction.enabled =true;

//IFC loader

const ifcLoader= new OBC.FragmentIfcLoader(viewer)
ifcLoader.settings.wasm = {
  path: "https://unpkg.com/web-ifc@0.0.43/",
  absolute:true
}
const toolbar= new OBC.Toolbar(viewer)
toolbar.addChild(
  ifcLoader.uiElement.get("main")
)
viewer.ui.addToolbar(toolbar);

const highlighter= new OBC.FragmentHighlighter(viewer)
highlighter.setup()

ifcLoader.onIfcLoaded.add((model)=>{
  highlighter.update()
  console.log(model)
})
// IFC properties to table logic//
import { a2 } from "./indexStructure";

//Add event listener//
interface Subcategory {
    subCategory: string;
    subcategoryIndicators: { subcatIndicatorName: string }[];
  }

  function generateTable(array: Subcategory[]) {
    const mainTableContainer = document.getElementById("table-container") as HTMLElement;
    const templateTableSection = document.getElementById("tableSectionDemo")!.cloneNode(true) as HTMLElement;
  
    array.forEach((subcategory) => {
      const tableSection = templateTableSection.cloneNode(true) as HTMLElement;
      const subcategoryButton = tableSection.querySelector(".tableSubcategory") as HTMLElement;
      const table = tableSection.querySelector(".tableComplete") as HTMLElement;
      const headerRow = table.querySelector(".tableRow") as HTMLElement;

      // Add a default header cell
      const defaultHeader = document.getElementById("tableIndicatorDemo")!.cloneNode(true) as HTMLElement;
      headerRow.appendChild(defaultHeader);
  
      // Add subcategory indicator names as additional headers
      subcategory.subcategoryIndicators.forEach((indicator) => {
        const indicatorHeader = defaultHeader.cloneNode(true) as HTMLElement;
        indicatorHeader.id = "";
        indicatorHeader.textContent = indicator.subcatIndicatorName;
        headerRow.appendChild(indicatorHeader);
      });
  
      // You can continue to customize the table structure as needed
      const existingIndicator = document.getElementById("tableIndicatorDemo") as HTMLElement;
      existingIndicator.remove();
  
      subcategoryButton.textContent = subcategory.subCategory;
  
      mainTableContainer.appendChild(tableSection);
    });
  
    const existingSection = document.getElementById("tableSectionDemo") as HTMLElement;
    existingSection.remove();
  }
  generateTable(a2); 