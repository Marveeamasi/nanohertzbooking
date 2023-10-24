import Nav from "../components/Nav";
import "../styles/Book.css";
import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { Helmet } from "react-helmet";
import { db } from "../firebase";
import emailjs from 'emailjs-com';
import Loader from "../components/Loader";
import Message from "../components/Message";

const Book = () => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setemail] = useState("");
    const [nation, setNation] = useState("");
    const [company, setCompany] = useState("");
    const [solution, setSolution] = useState("");
    const [mess, setMess] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [disM, setDisM] = useState("");
    const [stats, setStats] = useState("");
    const [isM, setIsM] = useState(false);
    const [allowbtn, setAllowbtn] = useState(false);
    const [errors, setErrors] = useState([]);
    const [countriesArray, setCountriesArray] = useState([]);

  useEffect(()=>{
    const fetchCountries = () => {
      fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
           setCountriesArray(data.map(country => country.name.common).sort());
      })
      .catch(error => console.error('Error:', error));
    };
    fetchCountries();
  },[])


    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      const validateCompany = (company) => {
        const companyRegex = /^[A-Za-z\s]+$/;
        return companyRegex.test(company);
      };
    
      const validatefName = (fName) => {
        const fNameRegex = /^[a-zA-Z]{2,20}$/;
        return fNameRegex.test(fName);
      };

      const validatelName = (lName) => {
        const lNameRegex = /^[a-zA-Z]{2,20}$/;
        return lNameRegex.test(lName);
      };

      const validateNationality = (Nationality) => {
        const NationalityRegex = /^[a-zA-Z]{2,20}$/;
        return NationalityRegex.test(Nationality);
      };

      const validateSolutions = (Solutions) => {
        const SolutionsRegex = /^[A-Za-z\s]+$/;
        return SolutionsRegex.test(Solutions);
      };
   

    useEffect(()=>{
        const valiDate = () => {
           
            let newErrors = [];
        
            if (!validateEmail(email)) {
              newErrors.push('Enter a valid email address');
            }else{
              newErrors = newErrors.filter(e => e !== 'Enter a valid email address');
            }
        
            if (!validatefName(fName)) {
              newErrors.push('Enter a valid first name');
            }else{
              newErrors = newErrors.filter(e => e !== 'Enter a valid first name');
            }

            if (!validatelName(lName)) {
                newErrors.push('Enter a valid lirst name');
              }else{
                newErrors = newErrors.filter(e => e !== 'Enter a valid lirst name');
              }
            
            if (!validateCompany(company)) {
              newErrors.push('Enter a valid company name');
            }else{
              newErrors = newErrors.filter(e => e !== 'Enter a valid company name');
            }
        
            if (!validateSolutions(solution)) {
              newErrors.push('Enter a valid message');
            }else{
              newErrors = newErrors.filter(e => e !== 'Enter a valid message');
            }

            if (!validateNationality(nation)) {
                newErrors.push('Enter a valid country');
              }else{
                newErrors = newErrors.filter(e => e !== 'Enter a valid country');
              }
            
        
            setErrors(newErrors);
        
            // If there are no errors, proceed with signup
            if (Object.keys(newErrors).length === 0) {
              // Perform signup logic
              // ...
              setAllowbtn(true);
            }else{
              setAllowbtn(false);
            }
          };
        valiDate();
    },[email, company, solution, fName, lName, nation])

    const handleSubmit = (e) => { 
        e.preventDefault();

        const bookingData = {
            firstName: fName,
            lastName: lName,
            email,
            nationality: nation,
            company,
            solutions: solution,
         };

        const calendlyLink = "https://calendly.com/amasimarvellous/meet-with-nanohertz"; 
        const emailMessage = `Click the link below to schedule a meeting: ${calendlyLink}`;
       
        
                setIsLoading(true);
                setIsM(false);
                setMess("A moment please..");
                emailjs
                .send('service_ao75urn', 'template_e9ovp6w', {
                  to_name: fName,
                  to_email: email,
                  message: emailMessage,
                }, 'MIRKY7yUv_4VJdUdi')
                .then(function (response) {
                    setMess("Email Processed..");
                    const doNxt = async() => {
                       try{   
                        // Adding the booking data to Firebase Firestore
                 await addDoc(collection(db, "bookings"), bookingData);
                 setMess("Credencials Processed..");
                 //To display a success message to the user
                 setIsLoading(false);
                 console.log("Booking submitted successfully!");
                 setIsM(true);
                  setDisM("Successful!, A Message Has Been Sent To Your Email");
                  setStats("200");
                    }catch(err){
                        console.log(err);
                        setIsLoading(false);
                        setIsM(true);
                        setDisM("Unable To Process Your Credencials, Please Chech Your Network Connection And Try Again!");
                        setStats("500");
                    }
                }
                doNxt();
            })
                .catch(function (error) {
                  console.error('Email not sent, error:', error);
                  setIsLoading(false);
                  setIsM(true);
                  setDisM("Unable To Send Email!, Please Chech Your Network Connection And Input The Your Correct Email");
                  setStats("500");
                });
       
    };

    const toggle = () => {
        setIsM(!isM);
    };

    return (
        <>
        {isM && <Message mess={disM} stats={stats} click={toggle}/>}
        {isLoading && <Loader mess={mess}/>}
        <div className="book">
            <Helmet>
                <meta charSet="utf-8" />
                <title> NanoHertz|Book </title>
            </Helmet>
            <Nav />
            <div className="section-1">
                <div className="section-a">
                    <span>Schedule a meeting with our team members.</span>
                    <p>
                        Use our convenient booking system to schedule a
                        consultation with our experts. Lets discuss your
                        project, goals, and how we can work together to shape
                        your IoT success.
                    </p>
                    <p>
                        Whether you are a startup, an established business, or
                        simply curious about IoT possibilities, our team is
                        eager to assist.
                    </p>
                    <p>
                        Whether you are exploring IoT solutions, need technical
                        support, or want to accelerate your business, we are
                        just a click away. Schedule a meeting today and lets
                        start the conversation.
                    </p>
                </div>
                <div className="section-b">
                    <form onSubmit={handleSubmit}>
                        <input
                            placeholder="First Name *"
                            name="First Name"
                            id="fname"
                            value={fName}
                            onChange={(e) => setFName(e.target.value)}
                        />
                        <input
                            placeholder="Last Name *"
                            name="Last Name"
                            id="lname"
                            value={lName}
                            onChange={(e) => setLName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email *"
                            name="Email"
                            id="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                        <select
                            id="nationality"
                            name="Nationality"
                            placeholder="Nationality *"
                            value={nation}
                            onChange={(e) => setNation(e.target.value)}
                        >
                        <option>Nationality *</option>
                          {countriesArray.map((c, i)=>
                               <option key={i}>{c}</option>
                          )}
                        </select>
                        <input
                            id="company"
                            placeholder="Company*"
                            name="Company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                        <textarea
                            name="solution"
                            id="solution"
                            cols="35"
                            rows="8"
                            placeholder="Which Solutions Would You Like To Discuss*"
                            value={solution}
                            onChange={(e) => setSolution(e.target.value)}
                        ></textarea>
                       {allowbtn && <button type="submit">Book</button>}
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Book;
