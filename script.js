document.addEventListener('DOMContentLoaded', function() {
    const daysContainer = document.querySelector('.days');
    const header = document.querySelector('.year-month');
    
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth(); // January is 0!
    const currentDate = today.getDate();
    
    // Set the header to the current month and year
    const monthNames = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
    header.textContent = `${currentYear}년 ${monthNames[currentMonth]}`;
    
    // Get the first day of the current month
    const firstDay = new Date(currentYear, currentMonth, 1).getDay(); 
    // Get the number of days in the current month
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Create previous month placeholder days
    for (let i = 0; i < firstDay; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('inactive');
        daysContainer.appendChild(dayDiv);
    }

    // Create current month days
    for (let i = 1; i <= totalDays; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;
        dayDiv.classList.add('active');
        
        // Highlight today's date
        if (i === currentDate) {
            dayDiv.classList.add('today');
        }
        
        // Color weekends
        const dayOfWeek = (firstDay + i - 1) % 7;
        if (dayOfWeek === 0) {
            dayDiv.classList.add('sunday'); // Sunday
        } else if (dayOfWeek === 6) {
            dayDiv.classList.add('saturday'); // Saturday
        }

        daysContainer.appendChild(dayDiv);
    }
});