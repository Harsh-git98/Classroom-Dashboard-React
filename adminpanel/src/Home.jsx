import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import { PieChart, Pie } from 'recharts';
function Home() {

    
     
  const cardsData = [{'id': 1, 'name': 'Surajit Das', 'cgpa': 6.26},
    {'id': 2, 'name': 'Chandan Ghosh', 'cgpa': 6.99},
    {'id': 3, 'name': 'Samyak Mahudwale Borkar', 'cgpa': 6.24},
    {'id': 4, 'name': 'Pallab Mandal', 'cgpa': 7.94},
    {'id': 5, 'name': 'Saideep Lama', 'cgpa': 5.66},
    {'id': 6, 'name': 'Sugali Tharun Naik', 'cgpa': 6.1},
    {'id': 7, 'name': 'Abhijit Karmakar', 'cgpa': 9.48},
    {'id': 8, 'name': 'Soumyajit Karmakar', 'cgpa': 9.59},
    {'id': 9, 'name': 'Aaratrika Sarkar', 'cgpa': 7.98},
    {'id': 10, 'name': 'Ankita Gupta', 'cgpa': 7.23},
    {'id': 11, 'name': 'Panchadi Bhavana', 'cgpa': 7.27},
    {'id': 12, 'name': 'Pankaj Yadav', 'cgpa': 8.23},
    {'id': 13, 'name': 'Rakhi Saren', 'cgpa': 6.72},
    {'id': 14, 'name': 'Harshit Kumar', 'cgpa': 9.42},
    {'id': 15, 'name': 'Subhranil Nandy', 'cgpa': 9.31},
    {'id': 16, 'name': 'Tirtha Halder', 'cgpa': 8.26},
    {'id': 17, 'name': 'Sayan Roy', 'cgpa': 8.52},
    {'id': 18, 'name': 'Nilanjan Kundu', 'cgpa': 7.63},
    {'id': 19, 'name': 'Bidyut Mridha', 'cgpa': 6.47},
    {'id': 20, 'name': 'Ankur Mukherjee', 'cgpa': 7.52},
    {'id': 21, 'name': 'Somdatta Biswas', 'cgpa': 7.69},
    {'id': 22, 'name': 'Aditya Roy', 'cgpa': 8.13},
    {'id': 23, 'name': 'Papri Das', 'cgpa': 6.53},
    {'id': 24, 'name': 'Vanshika Kothari', 'cgpa': 9.79},
    {'id': 25, 'name': 'Aitijhya Modak', 'cgpa': 9.44},
    {'id': 26, 'name': 'Om Kumar Rath', 'cgpa': 8.71},
    {'id': 27, 'name': 'Abhigyan Kumar', 'cgpa': 5.94},
    {'id': 28, 'name': 'Nikhil Kumar Yadav', 'cgpa': 8.82},
    {'id': 29, 'name': 'Amartya Ghosh', 'cgpa': 9.18},
    {'id': 30, 'name': 'Gaurav Gupta', 'cgpa': 6.98},
    {'id': 31, 'name': 'Shashank Shekhar Pathak', 'cgpa': 8.73},
    {'id': 32, 'name': 'Priyabrata Senapati', 'cgpa': 7.98},
    {'id': 33, 'name': 'Yashkumar Senma', 'cgpa': 7.22},
    {'id': 34, 'name': 'Mallela Aswartha Sai Kumar Reddy', 'cgpa': 6.77},
    {'id': 35, 'name': 'Sayak Chowdhury', 'cgpa': 8.19},
    {'id': 36, 'name': 'Samreen Aftab', 'cgpa': 8.53},
    {'id': 37, 'name': 'Atanu Mondal', 'cgpa': 7.28},
    {'id': 38, 'name': 'Subhadeep Banik', 'cgpa': 6.85},
    {'id': 39, 'name': 'Abhay Bhardwaj', 'cgpa': 9.28},
    {'id': 40, 'name': 'Soham Dalui', 'cgpa': 8.06},
    {'id': 41, 'name': 'Ankesh Hatui', 'cgpa': 8.11},
    {'id': 42, 'name': 'Ritika Yadav', 'cgpa': 7.91},
    {'id': 43, 'name': 'Debasmita Saha', 'cgpa': 8.01},
    {'id': 44, 'name': 'Burla Sai Krishna', 'cgpa': 8.45},
    {'id': 45, 'name': 'Om Singh', 'cgpa': 7.4},
    {'id': 46, 'name': 'Subhadeep Barman', 'cgpa': 7.95},
    {'id': 47, 'name': 'Aditya Seth', 'cgpa': 7.69},
    {'id': 48, 'name': 'Md Shakeb Akhtar', 'cgpa': 8.34},
    {'id': 49, 'name': 'Digwijoy Pandit', 'cgpa': 8.47},
    {'id': 50, 'name': 'Kri Manshi Singh', 'cgpa': 7.99},
    {'id': 51, 'name': 'Raunak Sarkar', 'cgpa': 7.3},
    {'id': 52, 'name': 'Dushyant Verma', 'cgpa': 6.13},
    {'id': 53, 'name': 'Harsh Ranjan', 'cgpa': 8.14},
    {'id': 54, 'name': 'Sangeet Gunwant Dhabare', 'cgpa': 6.68},
    {'id': 55, 'name': 'Usha Mog', 'cgpa': 6.19},
    {'id': 56, 'name': 'Arijit Pal', 'cgpa': 9.14},
    {'id': 57, 'name': 'Abhijit Mohanty', 'cgpa': 8.56},
    {'id': 58, 'name': 'Pasagadugula Swathi Siva Durga', 'cgpa': 7.73},
    {'id': 59, 'name': 'Tenzing Gyalpo Tamang', 'cgpa': 6.59},
    {'id': 60, 'name': 'Sumit Kumar Jha', 'cgpa': 7.53},
    {'id': 61, 'name': 'Pritam Mondal', 'cgpa': 6.33},
    {'id': 62, 'name': 'Amritesh Kumar', 'cgpa': 8.71},
    {'id': 63, 'name': 'Dhanraj Kumar', 'cgpa': 7.16},
    {'id': 64, 'name': 'Mayank Sharma', 'cgpa': 5.84},
    {'id': 66, 'name': 'Chatla Jithin Sri Surya', 'cgpa': 7.98},
    {'id': 67, 'name': 'Allamraju Veera Venkata Sai Prasad', 'cgpa': 7.94},
    {'id': 68, 'name': 'Dabbara Akash', 'cgpa': 6.18},
    {'id': 69, 'name': 'Talapaneni Varun Chowdary', 'cgpa': 7.22},
    {'id': 70, 'name': 'Shashwat Pandey', 'cgpa': 8.44},
    {'id': 71, 'name': 'Kalpana Meena', 'cgpa': 7.1},
    {'id': 72, 'name': 'Sumit Mangrati', 'cgpa': 8.19},
    {'id': 73, 'name': 'Ankit Kumar', 'cgpa': 7.8},
    {'id': 74, 'name': 'Abhash Jain', 'cgpa': 7.74},
    {'id': 75, 'name': 'Mohak Singh', 'cgpa': 8.7},
    {'id': 76, 'name': 'Manmeet Kaur', 'cgpa': 6.52},
    {'id': 77, 'name': 'Sourov Debnath', 'cgpa': 8.54},
    {'id': 78, 'name': 'Nitin Kumar Bais', 'cgpa': 8.44},
    {'id': 79, 'name': 'Ayush Tejaswi', 'cgpa': 8.62},
    {'id': 80, 'name': 'Vikash Gopalak', 'cgpa': 5.55},
    {'id': 81, 'name': 'Ameer Hamza Khan', 'cgpa': 8.21},
    {'id': 82, 'name': 'Nikita Nagpal', 'cgpa': 8.43},
    {'id': 83, 'name': 'Jeeet Choudhary', 'cgpa': 8.62},
    {'id': 84, 'name': 'Yash Kumar', 'cgpa': 5.67},
    {'id': 85, 'name': 'Vinay Adari', 'cgpa': 7.13},
    {'id': 86, 'name': 'Srujana Yarrarapu', 'cgpa': 6.6},
    {'id': 87, 'name': 'Faiza Tabasum', 'cgpa': 6.89},
    {'id': 88, 'name': 'Anurag Kumar', 'cgpa': 7.9},
    {'id': 89, 'name': 'Archit Ranjan', 'cgpa': 8.91},
    {'id': 90, 'name': 'Piyush Kumar Gupta', 'cgpa': 8.92},
    {'id': 91, 'name': 'Soumadip Singha Mahapatra', 'cgpa': 8.94},
    {'id': 92, 'name': 'Soirindhri Das', 'cgpa': 8.95},
    {'id': 93, 'name': 'Anchal Agrawal', 'cgpa': 8.69},
    {'id': 94, 'name': 'Manik', 'cgpa': 8.95},
    {'id': 95, 'name': 'Harsh Prasad', 'cgpa': 9.3},
    {'id': 96, 'name': 'Arunava Chakrabarty', 'cgpa': 8.81},
    {'id': 97, 'name': 'Ritik Kumar', 'cgpa': 8.78},
    {'id': 98, 'name': 'Manas Raj', 'cgpa': 8.28}
];

const genderData = [
  { name: "Boys", value: 79 },
  { name: "Girls", value: 19 },
];

const internData = [
  { name: "Interns", value: 12 },
  { name: "Rest", value: 86 },
];

const COLORS = ["#ff0000", "#ffffff"];


  return (
    <main className='main-container'>
        <div className="cards">
    <figure className="card1">
        <figcaption className="card_title">DEPARTMENT OF INFORMATION TECHNOLOGY</figcaption>
    </figure>
</div>
        <div className='main-title'>
            <h3>Department at a Glance</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>STRENGTH</h3>
                    <BsPeopleFill className='card_icon'/>
                    
                </div>
                <h1>99</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>INTERNS</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Class Representative</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>1. Archit <br></br>2. Aratrika</h1>
                
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Year  Representative</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>Shashwat Pandey</h1>
            </div>
        </div>

       
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>



<PieChart width={400} height={400}>
            <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
                label
            >
                {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip contentStyle={{
                backgroundColor: '#fff',   // Change background color
                color: 'red',             // Change text color
                borderRadius: '5px',       // Optional: rounded corners
                padding: '10px'            // Optional: padding inside the tooltip
            }} />
            <Legend />
        </PieChart>


      
        <BarChart width={400} height={400} data={internData} layout='vertical'>
            
        <XAxis type="number" />
            <YAxis dataKey="name" type="category"  />
            <Tooltip contentStyle={{
                backgroundColor: '#333',   // Change background color
                color: '#fff',             // Change text color
                borderRadius: '5px',       // Optional: rounded corners
                padding: '10px'            // Optional: padding inside the tooltip
            }} />
            <Legend />
            
            <Bar dataKey="value" fill="red" />
        </BarChart>

        
</div>




        
        
    </main>
  )
}

export default Home