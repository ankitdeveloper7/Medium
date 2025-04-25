export function Calculatedate(time: string): string {
    let monthname = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec" ];
    let dateObject = new Date(time);
    let year = dateObject.getFullYear();
    let month = dateObject.getMonth() + 1;
    const data = month + " " + monthname[month-1] + " " + year;
    return data;
}