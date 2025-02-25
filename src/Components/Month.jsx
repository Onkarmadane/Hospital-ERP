import { useState } from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from "date-fns";

const Month = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Get start and end of month
  const startMonth = startOfMonth(currentDate);
  const endMonth = endOfMonth(currentDate);

  // Get first and last visible days in the week grid
  const startDate = startOfWeek(startMonth);
  const endDate = endOfWeek(endMonth);

  // Generate days for the calendar
  const getDays = () => {
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(day);
      day = addDays(day, 1);
    }
    return days;
  };

  const days = getDays();
  const weeks = [];

  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <div className="schedule-container text-black bg-white w-[75%]">
      <h1 className="text-2xl font-bold mb-4">{format(currentDate, "MMMM yyyy")}</h1>

      <table className="w-full border-collapse border border-gray-300 text-center overflow-auto">
        <thead>
          <tr className=" text-black">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <th key={day} className="p-3 border border-gray-300">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, idx) => (
            <tr key={idx}>
              {week.map((day) => (
                <td
                  key={day}
                  className={`p-4 border border-gray-300 ${format(day, "MM") !== format(currentDate, "MM") ? "text-gray-400" : "text-black"
                    }`}
                >
                  {format(day, "d")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Month;
