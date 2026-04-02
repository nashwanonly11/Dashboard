let sidebar = document.getElementById("sidebar");
let content = document.querySelector("#content");
let toggle_sidebar = document.querySelector("#sidebar-toggle");


// طريقة ازاحة المحتوى

toggle_sidebar.addEventListener("click", () => {
    let sidebarRight = window.getComputedStyle(sidebar).right;    //  الحصول عللى القيمة الفعلية

    if (window.innerWidth > 767) {

        // لأجهزة الحاسوب يتم ازاحة المحتوى
        if (sidebarRight === "0px") {
            sidebar.style.right = "-250px";
            content.style.marginRight = "0";
        } else {
            sidebar.style.right = "0";
            content.style.marginRight = "250px";
        }
    } else {
        
        // للجوال لا يتم ازاحة المحتوى , فقط يظهر الشريط فوقه
        if (sidebarRight === "0px") {
            sidebar.style.right = "-250px";
        } else {
            sidebar.style.right = "0px";
        }
    }
});




// .طريقة ضغط المحتوى باستخدام العرض



// toggle_sidebar.addEventListener("click", () => {
//     // الحصول على العرض الفعلي للشريط الجانبي

//     let sidebarWidth = window.getComputedStyle(sidebar).width;
//     if (sidebarWidth == "250px") {
//         sidebar.style.width = "0";
//         content.style.marginRight = "0";
//     } else {
//         sidebar.style.width = "250px";
//         content.style.marginRight = "250px";
//     }
// });


// messeges area

let messegescontainer = document.getElementById('messeges-container');
let messegesarea = document.getElementById('messeges-area');

messegescontainer.addEventListener("click", function () {
    messegesarea.style.display = messegesarea.style.display === "block" ? "none" : "block";
});







// new DataTable('#example');


new DataTable('#example', {
    responsive: true,
    buttons: [
        {
            extend: 'copy',
            text: 'نسخ'
        }, {
            extend: 'excel',
            text: 'اكسل'
        }, {
            extend: 'pdf',
            text: 'ملف'
        }, {
            extend: 'print',
            text: 'طباعة'
        }

    ],
    layout: {
        topStart: 'buttons'
    }
});





