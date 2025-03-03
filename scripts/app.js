document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".Header_SidePanel");
    const openMenu = document.querySelector(".navigation-views__Menuicon");
    const closeMenu = document.querySelector(".SideBar__CloseButton");

    const header_ = document.querySelector("header");
    const main_ = document.querySelector("main");
    const footer_ = document.querySelector("footer");

    const Line_4_Menu_ICON = document.getElementById("Line_4");
    const Line_2_Menu_ICON = document.getElementById("Line_2");


    openMenu.addEventListener("click", function (e) {
        e.preventDefault();
        sidebar.style.opacity='0';
        Line_4_Menu_ICON.style.opacity='1';
        Line_2_Menu_ICON.style.opacity='1';


        sidebar.classList.remove("OpenMenuANIM_class","CloseMenuANIM_class");
        sidebar.style.display='flex';
        setTimeout(()=>{
            sidebar.classList.add("OpenMenuANIM_class");
        },10);   

        header_.classList.remove("_DisableBody_MenuActivated","_DIS-DisableBody_MenuActivated");
        main_.classList.remove("_DisableBody_MenuActivated","_DIS-DisableBody_MenuActivated");
        footer_.classList.remove("_DisableBody_MenuActivated","_DIS-DisableBody_MenuActivated");
       
        setTimeout(()=>{
            header_.classList.add("_DisableBody_MenuActivated");
            main_.classList.add("_DisableBody_MenuActivated");
            footer_.classList.add("_DisableBody_MenuActivated");
        },10);   


        
        Line_4_Menu_ICON.classList.remove("_4_colapsLines__MENU-ICON-GROUP","_4_RisesLines__MENU-ICON-GROUP");
        Line_2_Menu_ICON.classList.remove("_2_colapsLines__MENU-ICON-GROUP","_2_RisesLines__MENU-ICON-GROUP");
       
        setTimeout(()=>{
            Line_4_Menu_ICON.classList.add("_4_colapsLines__MENU-ICON-GROUP");
            Line_2_Menu_ICON.classList.add("_2_colapsLines__MENU-ICON-GROUP");
            
        },10);   



        console.log('done1');
    });

    closeMenu.addEventListener("click", function (e) {
        e.preventDefault();
        sidebar.style.opacity='1';
        Line_4_Menu_ICON.style.opacity='0';
        Line_2_Menu_ICON.style.opacity='0';

        sidebar.classList.remove("OpenMenuANIM_class","CloseMenuANIM_class");
        setTimeout(()=>{
            sidebar.classList.add("CloseMenuANIM_class");
        },10);   
        // sidebar.style.display='none';




        header_.classList.remove("_DisableBody_MenuActivated","_DIS-DisableBody_MenuActivated");
        main_.classList.remove("_DisableBody_MenuActivated","_DIS-DisableBody_MenuActivated");
        footer_.classList.remove("_DisableBody_MenuActivated","_DIS-DisableBody_MenuActivated");
       
        setTimeout(()=>{
            header_.classList.add("_DIS-DisableBody_MenuActivated");
            main_.classList.add("_DIS-DisableBody_MenuActivated");
            footer_.classList.add("_DIS-DisableBody_MenuActivated");
        },10);   


        Line_4_Menu_ICON.classList.remove("_4_colapsLines__MENU-ICON-GROUP","_4_RisesLines__MENU-ICON-GROUP");
        Line_2_Menu_ICON.classList.remove("_2_colapsLines__MENU-ICON-GROUP","_2_RisesLines__MENU-ICON-GROUP");
       
        setTimeout(()=>{
            Line_4_Menu_ICON.classList.add("_4_RisesLines__MENU-ICON-GROUP");
            Line_2_Menu_ICON.classList.add("_2_RisesLines__MENU-ICON-GROUP");
        },10);   

        console.log('done2');
    }
    );
    
});