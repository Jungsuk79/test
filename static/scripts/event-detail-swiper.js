document.addEventListener("DOMContentLoaded", function(){
    const htmlEditorToggle2 = document.querySelector(".pc-event2023-detail02")
    const htmlEditorToggle3 = document.querySelector(".pc-event2023-detail03")
    const htmlEditorToggle6 = document.querySelector(".pc-event2023-detail06")
    const noticeToggle = document.querySelector(".mileage-notice .btn")
    if(htmlEditorToggle2){
        noticeToggle.onclick = function() {
            const classes = noticeToggle.classList;
            const result = classes.toggle("open-notice");
        }
    }
    if(htmlEditorToggle3){
        noticeToggle.onclick = function() {
            const classes = noticeToggle.classList;
            const result = classes.toggle("open-notice");
        }
    }
    if(htmlEditorToggle6){
        noticeToggle.onclick = function() {
            const classes = noticeToggle.classList;
            const result = classes.toggle("open-notice");
        }
    }
})