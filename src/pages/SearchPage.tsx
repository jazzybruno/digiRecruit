import Head from "../components/Header";
import { useState } from 'react';

const SearchPage = () => {
    const employees = [
        {
          username: 'JohnDoe',
          email: 'johndoe@example.com',
          password: 'password123',
          fieldOfWork: 'Software Development',
        },
        {
          username: 'JaneSmith',
          email: 'janesmith@example.com',
          password: 'letmein',
          fieldOfWork: 'Data Analysis',
        },
        {
          username: 'MichaelJohnson',
          email: 'michaeljohnson@example.com',
          password: 'mypass12',
          fieldOfWork: 'Marketing',
        },
        {
          username: 'EmilyDavis',
          email: 'emilydavis@example.com',
          password: 'mysecret123',
          fieldOfWork: 'Design',
        },
        {
          username: 'RobertLee',
          email: 'robertlee@example.com',
          password: 'pass1234',
          fieldOfWork: 'Accounting',
        },
        {
          username: 'JenniferBrown',
          email: 'jenniferbrown@example.com',
          password: 'mysecurepw',
          fieldOfWork: 'Human Resources',
        },
        {
          username: 'DavidMiller',
          email: 'davidmiller@example.com',
          password: 'david123',
          fieldOfWork: 'Sales',
        },
        {
          username: 'LindaWilson',
          email: 'lindawilson@example.com',
          password: 'mypassword',
          fieldOfWork: 'Operations',
        },
        {
          username: 'WilliamTaylor',
          email: 'williamtaylor@example.com',
          password: 'taylorpass',
          fieldOfWork: 'Customer Support',
        },
        {
          username: 'SarahAnderson',
          email: 'sarahanderson@example.com',
          password: 'anderson123',
          fieldOfWork: 'Research and Development',
        },
        {
          username: 'ChristopherThomas',
          email: 'christopherthomas@example.com',
          password: 'cthomas',
          fieldOfWork: 'Quality Assurance',
        },
        {
          username: 'JessicaRoberts',
          email: 'jessicaroberts@example.com',
          password: 'password567',
          fieldOfWork: 'Product Management',
        },
        {
          username: 'DanielClark',
          email: 'danielclark@example.com',
          password: 'dclark',
          fieldOfWork: 'IT Support',
        },
        {
          username: 'AmandaHarris',
          email: 'amandaharris@example.com',
          password: 'mypw123',
          fieldOfWork: 'Public Relations',
        },
        {
          username: 'MatthewWhite',
          email: 'matthewwhite@example.com',
          password: 'matt1234',
          fieldOfWork: 'Finance',
        },
        {
          username: 'OliviaThompson',
          email: 'oliviathompson@example.com',
          password: 'olivia321',
          fieldOfWork: 'Administration',
        },
        {
          username: 'JamesHall',
          email: 'jameshall@example.com',
          password: 'pass456',
          fieldOfWork: 'Legal',
        },
        {
          username: 'SophiaScott',
          email: 'sophiascott@example.com',
          password: 'sophia12',
          fieldOfWork: 'Business Development',
        },
        {
          username: 'LoganGreen',
          email: 'logangreen@example.com',
          password: 'greenpw',
          fieldOfWork: 'Supply Chain',
        },
        {
          username: 'VictoriaAdams',
          email: 'victoriaadams@example.com',
          password: 'victoria567',
          fieldOfWork: 'Logistics',
        },
        // Add more employee objects as needed
      ];
      
      const [searchTerm, setSearchTerm] = useState('');
      const filteredEmployees = employees.filter((employee) =>
        employee.email.includes(searchTerm)
      );
    
      const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
      };
    
      return (
        <>
        <Head />
        <div className="p-4">
          <input
            type="text"
            placeholder="Search by Email"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"
          />
          <ul>
          {filteredEmployees.map((employee) => (
          <li key={employee.email} className="mb-4 p-4 bg-sky-100 rounded">
            <div className="font-bold mb-2">Username: {employee.username}</div>
            <div className="mb-1">Email: {employee.email}</div>
            <div className="mb-1">Password: {employee.password}</div>
            <div>Field of Work: {employee.fieldOfWork}</div>
          </li>
        ))}
          </ul>
        </div>
        </>
     );
}
 
export default SearchPage;