import * as OBC from "openbim-components";

const viewer =new OBC.Components ();
const sceneComponent= new OBC.SimpleScene(viewer);
viewer.scene = sceneComponent;
const scene = sceneComponent.get()
scene.background = null;

const viewerContainer = document.getElementById("viewer-container") as HTMLDivElement;
const rendererComponent = new OBC.SimpleRenderer(viewer,viewerContainer)
viewer.renderer = rendererComponent;

const cameraComponent = new OBC.OrthoPerspectiveCamera(viewer);
viewer.camera = cameraComponent;

viewer.init