
const a2=[
    {id:"a2_01",
    subCategory:"Facades",
    subcategoryIndicators:[
        {id:"a2_02_00",subcatIndicatorName:"Facade Element",units:""},
        {id:"a2_02_01",subcatIndicatorName:"Facade Covering",units:""},
        {id:"a2_02_02",subcatIndicatorName:"Facade Main Structure",units:""},
        {id:"a2_02_03",subcatIndicatorName:"Facade Surface Area", units:"m2"},
        {id:"a2_02_04",subcatIndicatorName:"Facade U value", units:"W/m2*K"},
        {id:"a2_02_05",subcatIndicatorName:"Facade Insulation (Y/N)",units:""},
        {id:"a2_02_06",subcatIndicatorName:"Facade Thickness of insulation", units:"mm"},
        {id:"a2_02_07",subcatIndicatorName:"Facade Insulation Type",units:""},
        {id:"a2_02_08",subcatIndicatorName:"Facade Insulation Thermal Conductivity",units:"W/m*K"},
        {id:"a2_02_09",subcatIndicatorName:"Facade Layer Material 1",units:""},
        {id:"a2_02_10",subcatIndicatorName:"Facade Layer Thermal Conductivity 1"},
        {id:"a2_02_11",subcatIndicatorName:"Facade Layer Thickness 1"},
    ]},
    {id:"a2_02",
    subCategory:"Windows",
    subcategoryIndicators:[
        {id:"a2_03_00",subcatIndicatorName:"Window Element",units:""},
        {id:"a2_03_01",subcatIndicatorName:"Window Frame Material",units:""},
        {id:"a2_03_02",subcatIndicatorName:"Window Glass Composition",units:""},
        {id:"a2_03_03",subcatIndicatorName:"Window Surface Area", units:"m2"},
        {id:"a2_03_04",subcatIndicatorName:"Window Frame Factor", units:"%"},
        {id:"a2_03_05",subcatIndicatorName:"Window U-Value Frame",units:"W/m2*K"},
        {id:"a2_03_06",subcatIndicatorName:"Window U-Value Glazing", units:"W/m2*K"},
        {id:"a2_03_07",subcatIndicatorName:"Window g-Value Glazing",units:""},
        {id:"a2_03_08",subcatIndicatorName:"Window Glazed facade",units:"%"},
        {id:"a2_03_09",subcatIndicatorName:"Window Orientation",units:""},
        {id:"a2_03_10",subcatIndicatorName:"Window Protection Elements/ Sheltered Sides",units:""},
        {id:"a2_03_11",subcatIndicatorName:"Window Shutters and Solar Protection",units:""},
    ]},
    {id:"a2_02",
    subCategory:"Floors",
    subcategoryIndicators:[
        {id:"a2_04_00",subcatIndicatorName:"Floor Element",units:""},
        {id:"a2_04_01",subcatIndicatorName:"Nº Heated Floors",units:""},
        {id:"a2_04_02",subcatIndicatorName:"Floor Surface Area",units:"m2"},
        {id:"a2_04_03",subcatIndicatorName:"Floor U-Value",units:"W/m2*K"},
        {id:"a2_04_04",subcatIndicatorName:"Floor Structure Slab",units:""},
        {id:"a2_04_05",subcatIndicatorName:"Floor Insulation (Y/N)",units:""},
        {id:"a2_04_06",subcatIndicatorName:"Floor Insulation Thickness",units:""},
        {id:"a2_04_07",subcatIndicatorName:"Floor Insulation Type",units:""},
        {id:"a2_04_08",subcatIndicatorName:"Floor Insulation Thermal Conductivity",units:""},
        {id:"a2_04_09",subcatIndicatorName:"Floor Layer Material 1",units:""},
        {id:"a2_04_10",subcatIndicatorName:"Floor Layer Thermal Conductivity 1",units:""},
        {id:"a2_04_11",subcatIndicatorName:"Floor Layer Thickness 1",units:""},
    ]},
    {id:"a2_03",
    subCategory:"Roofs",
    subcategoryIndicators:[
        {id:"a2_05_00",subcatIndicatorName:"Roof Element",units:""},
        {id:"a2_05_01",subcatIndicatorName:"Roof Surface Area",units:"m2"},
        {id:"a2_05_02",subcatIndicatorName:"Roof U-Value",units:"W/m2*K"},
        {id:"a2_05_03",subcatIndicatorName:"Roof Main Structure",units:""},
        {id:"a2_05_04",subcatIndicatorName:"Roof Insulation (Y/N)",units:""},
        {id:"a2_05_05",subcatIndicatorName:"Roof Insulation Thickness",units:""},
        {id:"a2_05_06",subcatIndicatorName:"Roof Insulation Type",units:""},
        {id:"a2_05_07",subcatIndicatorName:"Roof Insulation Thermal Conductivity",units:""},
        {id:"a2_05_08",subcatIndicatorName:"Roof Layer Material 1",units:""},
        {id:"a2_05_09",subcatIndicatorName:"Roof Layer Thermal Conductivity 1",units:""},
        {id:"a2_05_10",subcatIndicatorName:"Roof Layer Thickness 1",units:""},
    ]},
    {id:"a2_04",
    subCategory:"Material Inventory",
    subcategoryIndicators:[
        {id:"a2_06_00",subcatIndicatorName:"Roof Element",units:""},
        {id:"a2_06_01",subcatIndicatorName:"Roof Surface Area",units:"m2"},
        {id:"a2_06_02",subcatIndicatorName:"Roof U-Value",units:"W/m2*K"},
        {id:"a2_06_03",subcatIndicatorName:"Roof Main Structure",units:""},
        {id:"a2_06_04",subcatIndicatorName:"Roof Insulation (Y/N)",units:""},
        {id:"a2_06_05",subcatIndicatorName:"Roof Insulation Thickness",units:""},
        {id:"a2_06_06",subcatIndicatorName:"Roof Insulation Type",units:""},
        {id:"a2_06_07",subcatIndicatorName:"Roof Insulation Thermal Conductivity",units:""},
        {id:"a2_06_08",subcatIndicatorName:"Roof Layer Material 1",units:""},
        {id:"a2_06_09",subcatIndicatorName:"Roof Layer Thermal Conductivity 1",units:""},
        {id:"a2_06_10",subcatIndicatorName:"Roof Layer Thickness 1",units:""},
    ]},
];
function generateTable(array) {
    const mainTableContainer = document.getElementById("table-container");
    const templateTableSection = document.getElementById("tableSectionDemo").cloneNode(true);
  
    array.forEach((subcategory) => {
      const tableSection = templateTableSection.cloneNode(true);
      const subcategoryButton = tableSection.querySelector(".tableSubcategory");
      const table = tableSection.querySelector(".tableComplete");
      const headerRow = table.querySelector(".tableRow");
  
  
      // Add a default header cell
      const defaultHeader = document.getElementById("tableIndicatorDemo").cloneNode(true);
      headerRow.appendChild(defaultHeader);
  
      // Add subcategory indicator names as additional headers
      subcategory.subcategoryIndicators.forEach((indicator) => {
        const indicatorHeader = defaultHeader.cloneNode(true);
        indicatorHeader.id="";
        indicatorHeader.textContent = indicator.subcatIndicatorName;
        headerRow.appendChild(indicatorHeader);
        
      });
  
      // You can continue to customize the table structure as needed
      const existingIndicator = document.getElementById("tableIndicatorDemo");
      existingIndicator.remove();
      
      subcategoryButton.textContent = subcategory.subCategory;
  
      mainTableContainer.appendChild(tableSection);
    });
    const exisistingSection = document.getElementById("tableSectionDemo");
    exisistingSection.remove();
  }
generateTable(a2);
//Add event listener//
const btnNav= document.querySelectorAll(".category-btn")

