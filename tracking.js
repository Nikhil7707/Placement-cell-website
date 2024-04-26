document.addEventListener("DOMContentLoaded", function() {
    const rows = document.querySelectorAll(".content-table tbody tr");
    
    rows.forEach(row => {
        const status = row.cells[3].textContent.trim(); // Status is in the 4th cell (index 3)
        
        if (status === "Selected") {
            row.classList.add("selected");
        } else if (status === "Rejected") {
            row.classList.add("rejected");
        }
    });
});
