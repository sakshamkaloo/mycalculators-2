import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const API = 'http://localhost:5000/api';

const Navbar = ({ setPage }) => (
  <nav style={{ marginBottom: '20px' }}>
    {['home', 'about', 'contact', 'arithmetic', 'date', 'factorial', 'interest'].map(p => (
      <button key={p} onClick={() => setPage(p)}>{p.charAt(0).toUpperCase() + p.slice(1)}</button>
    ))}
  </nav>
);

const Home = () => (
  <div>
   <div class="container mt-4">
  <div class="p-5 mb-4 bg-light rounded-3 shadow">
    <div class="container-fluid py-5 text-center">
      <h1 class="display-5 fw-bold">Welcome to Multi-Calculator App</h1>
      <p class="col-md-8 mx-auto fs-5">
        A full-stack web calculator system that helps you perform common calculations,
        tracks your inputs and results, and stores everything securely in a database.
      </p>
      <a href="#features" class="btn btn-primary btn-lg mt-3">Explore Features</a>
    </div>
  </div>

  <section id="features" class="my-5">
    <h2 class="mb-4">Quick Features Preview</h2>
    <div class="row g-4">
      <div class="col-md-3 text-center">
        <div class="border p-3 rounded shadow-sm">
          <h5>Arithmetic</h5>
          <p>Add, subtract, multiply or divide with ease.</p>
        </div>
      </div>
      <div class="col-md-3 text-center">
        <div class="border p-3 rounded shadow-sm">
          <h5>Date Difference</h5>
          <p>Calculate days between two dates instantly.</p>
        </div>
      </div>
      <div class="col-md-3 text-center">
        <div class="border p-3 rounded shadow-sm">
          <h5>Factorial</h5>
          <p>Compute the factorial of any number.</p>
        </div>
      </div>
      <div class="col-md-3 text-center">
        <div class="border p-3 rounded shadow-sm">
          <h5>Simple Interest</h5>
          <p>Get your interest calculated from P, R & T.</p>
        </div>
      </div>
    </div>
    <div class="text-end mt-3">
      <a href="/features" class="btn btn-outline-primary">View All Features →</a>
    </div>
  </section>

  <section class="my-5" id="author">
    <h2>About the Developer</h2>
    <div class="row align-items-center">
      <div class="col-md-3">
        <img src="https://api.dicebear.com/9.x/fun-emoji/svg?seed=Liam" class="img-fluid rounded" alt="Author image placeholder" />
      </div>
      <div class="col-md-9">
        <p>
          Hi! I’m <strong>Saksham Kaloo</strong>, a MERN stack developer passionate about building simple and smart tools for real-world problems. 
          This calculator project is built to demonstrate full-stack features like form handling, database logging, pagination, and clean UI—all in a single-page React experience.
        </p>
        <a href="/about" class="btn btn-outline-secondary">More About Me →</a>
      </div>
    </div>
  </section>

  <section class="text-center my-5">
    <h3>Have a question or feedback?</h3>
    <p>I'm happy to connect with you and hear your suggestions.</p>
    <a href="/contact" class="btn btn-success">Contact Me</a>
  </section>

 
</div>

  </div>
);

const About = () => (
  <div>
    <div class="container my-5">
  <div class="text-center mb-5">
    <h1>About This Project</h1>
    <p class="text-muted">What this project is, what it does, and why it was built.</p>
  </div>

  <section class="mb-5">
    <h2>Project Overview</h2>
    <p>
      The <strong>Multi-Calculator App</strong> is a full-stack web application built using the <strong>MERN stack</strong>
      (MongoDB, Express.js, React, Node.js). It offers several types of calculators that not only perform computations
      but also log each calculation—along with inputs and timestamps—into a secure MongoDB database.
    </p>
    <p>
      This project is designed to showcase modern web development techniques including:
      component-based UI with React, RESTful API design with Express, real-time data logging with MongoDB,
      and client-server communication using Axios.
    </p>
  </section>

  <section class="mb-5">
    <h2>Key Features</h2>
    <ul class="list-group">
      <li class="list-group-item"><strong>Arithmetic Calculator:</strong> Add, subtract, multiply, and divide two numbers.</li>
      <li class="list-group-item"><strong>Date Calculator:</strong> Find the number of days between any two dates.</li>
      <li class="list-group-item"><strong>Factorial Calculator:</strong> Instantly compute factorials of integers.</li>
      <li class="list-group-item"><strong>Simple Interest Calculator:</strong> Calculate interest using principal, rate, and time.</li>
      <li class="list-group-item"><strong>Input & Result Logging:</strong> All calculations are logged with user input, result, and time.</li>
      <li class="list-group-item"><strong>Paginated History:</strong> View previous calculations with pagination support.</li>
    </ul>
    <div class="mt-3">
      <a href="/features" class="btn btn-outline-primary">See Detailed Features →</a>
    </div>
  </section>

  <section class="mb-5">
    <h2>About the Developer</h2>
    <div class="row align-items-center">
      <div class="col-md-3">
        <img src="https://placehold.co/200/green/gold?text=About Me" alt="Author Placeholder" class="img-fluid rounded shadow" />
      </div>
      <div class="col-md-9">
        <p>
          Hi! I’m <strong>Saksham Kaloo</strong>, a web developer with a passion for building full-stack applications
          that solve real-world problems. This project demonstrates my skills in handling user interactions,
          managing data flow, and delivering a clean and functional user interface.
        </p>
        <p>
          I enjoy learning modern technologies and applying them to build responsive, database-connected applications.
          This calculator app is part of a broader portfolio aimed at showcasing practical development capabilities.
        </p>
      </div>
    </div>
  </section>

  <section class="text-center mt-5">
    <h4>Want to know more or leave feedback?</h4>
    <p>Visit the contact page or check out all features in depth.</p>
    <a href="/contact" class="btn btn-success me-2">Contact Me</a>
    <a href="/features" class="btn btn-outline-dark">Explore Features</a>
  </section>
</div>

  </div>
);

const Contact = () => (
  <div>
    <div class="container my-5">
  <div class="text-center mb-5">
    <h1>Contact Us</h1>
    <p class="text-muted">We’d love to hear from you. Send us a message below.</p>
  </div>

  <div class="row mb-5">
    <div class="col-md-6">
      <form>
        <div class="mb-3">
          <label class="form-label">Your Name</label>
          <input type="text" class="form-control" placeholder="Enter your full name" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Email Address</label>
          <input type="email" class="form-control" placeholder="name@example.com" required />
        </div>
        <div class="mb-3">
          <label class="form-label">Message</label>
          <textarea class="form-control" rows="4" placeholder="Write your message here..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
    </div>

    <div class="col-md-6">
      <div class="bg-light border rounded p-3 text-center" style={{height: '100%'}}>
        {/* <p class="text-muted">Map Placeholder</p> */}
        {/* <p>(Embed Google Maps here later...)</p> */}
        <div class="bg-secondary" style={{height: '250px'}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6713.119182392059!2d74.85709224093361!3d32.72432864139485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1751621022681!5m2!1sen!2sin" width="100%" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>

  <section class="mb-5">
    <h2 class="mb-3">What You Can Do With This App</h2>
    <ul class="list-group">
      <li class="list-group-item"> Perform arithmetic, factorial, date & interest calculations</li>
      <li class="list-group-item"> Log your inputs and results for every calculation</li>
      <li class="list-group-item"> View calculation history with pagination</li>
      <li class="list-group-item"> Navigate between pages easily using a shared navbar</li>
    </ul>
    <div class="mt-3">
      <a href="/features" class="btn btn-outline-primary">See All Features →</a>
    </div>
  </section>

  <section class="mb-5">
    <h2>About the Developer</h2>
    <div class="row align-items-center">
      <div class="col-md-3">
        <img src="https://placehold.co/200/blue/white?text=About Me" alt="Author image placeholder" class="img-fluid rounded shadow" />
      </div>
      <div class="col-md-9">
        <p>
          I’m <strong>Saksham Kaloo</strong>, the developer behind this project. My goal was to build a simple yet functional MERN app
          that demonstrates clean design, real-time logging, and full-stack connectivity. If you'd like to connect, collaborate, or provide feedback, reach out using the form above!
        </p>
        <a href="/about" class="btn btn-outline-secondary">Learn More About Me →</a>
      </div>
    </div>
  </section>

  <section class="text-center mt-5">
    <h4>Want to explore more?</h4>
    <p>Check out our feature list and the full story behind this app.</p>
    <a href="/features" class="btn btn-info me-2">Explore Features</a>
    <a href="/about" class="btn btn-outline-dark">Read About Project</a>
  </section>
</div>
</div>

);

const History = ({ type }) => {
  const [history, setHistory] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 5;

  useEffect(() => {
    axios.get(`${API}/history?type=${type}&page=${page}&limit=${limit}`)
      .then(res => {
        setHistory(res.data.data);
        setTotal(res.data.total);
      });
  }, [type, page]);

  return (
    <div>
      <h4>Previous Calculations:</h4>
      <ul>
        {history.map((h, i) => (
          <li key={i} style={{ marginBottom: '10px' }}>
            <b>{new Date(h.date).toLocaleString()}</b><br />
            <b>Inputs:</b> {Object.entries(h.input || {}).map(([k, v]) => `${k}=${v}`).join(', ')}<br />
            <b>Result:</b> {h.value}
          </li>
        ))}
      </ul>
      <div>
        {Array.from({ length: Math.ceil(total / limit) }, (_, i) => (
          <button key={i} onClick={() => setPage(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
};

const ArithmeticCalc = () => {
  const [a, setA] = useState(0), [b, setB] = useState(0), [op, setOp] = useState('+'), [result, setResult] = useState(null);

  const calc = () => {
    const val = eval(`${a} ${op} ${b}`);
    setResult(val);
    axios.post(`${API}/log`, { type: 'arithmetic', input: { a, b, op }, value: val });
  };

  return (
    <div id='arithmatic'>
      <h2>Arithmetic Calculator</h2>
      <input type="number" value={a} onChange={e => setA(e.target.value)} placeholder="A" /> <br></br>
      <select onChange={e => setOp(e.target.value)} value={op}>
        <option>+</option><option>-</option><option>*</option><option>/</option>
      </select> <br></br>
      <input type="number" value={b} onChange={e => setB(e.target.value)} placeholder="B" /> <br></br>
      <button onClick={calc}>Calculate</button>
      <p>Result: {result}</p>
      <History type="arithmetic" />
    </div>
  );
};

const DateCalc = () => {
  const [d1, setD1] = useState(''), [d2, setD2] = useState(''), [diff, setDiff] = useState(null);

  const calc = () => {
    const delta = Math.abs(new Date(d2) - new Date(d1)) / (1000 * 3600 * 24);
    setDiff(delta);
    axios.post(`${API}/log`, { type: 'date', input: { d1, d2 }, value: delta });
  };

  return (
    <div id='date'>
      <h2>Date Difference Calculator</h2>
      <input type="date" onChange={e => setD1(e.target.value)} />
      <input type="date" onChange={e => setD2(e.target.value)} />
      <button onClick={calc}>Calculate</button>
      <p>Days Difference: {diff}</p>
      <History type="date" />
    </div>
  );
};

const FactorialCalc = () => {
  const [n, setN] = useState(1), [result, setResult] = useState(1);

  const calc = () => {
    const val = n <= 1 ? 1 : [...Array(+n).keys()].reduce((a, c) => a * (c + 1), 1);
    setResult(val);
    axios.post(`${API}/log`, { type: 'factorial', input: { n }, value: val });
  };

  return (
    <div id ='factorial'>
      <h2>Factorial Calculator</h2>
      <input type="number" value={n} onChange={e => setN(e.target.value)} />
      <button onClick={calc}>Calculate</button>
      <p>Result: {result}</p>
      <History type="factorial" />
    </div>
  );
};

const InterestCalc = () => {
  const [p, setP] = useState(0), [r, setR] = useState(0), [t, setT] = useState(0), [result, setResult] = useState(null);

  const calc = () => {
    const val = (p * r * t) / 100;
    setResult(val);
    axios.post(`${API}/log`, { type: 'interest', input: { p, r, t }, value: val });
  };

  return (
    <div id='interest'>
      <h2>Simple Interest Calculator</h2>
      <input placeholder="Principal" value={p} onChange={e => setP(e.target.value)} />
      <input placeholder="Rate" value={r} onChange={e => setR(e.target.value)} />
      <input placeholder="Time" value={t} onChange={e => setT(e.target.value)} />
      <button onClick={calc}>Calculate</button>
      <p>Interest: {result}</p>
      <History type="interest" />
    </div>
  );
};

export default function App() {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'about': return <About />;
      case 'contact': return <Contact />;
      case 'arithmetic': return <ArithmeticCalc />;
      case 'date': return <DateCalc />;
      case 'factorial': return <FactorialCalc />;
      case 'interest': return <InterestCalc />;
      default: return <Home />;
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Navbar setPage={setPage} />
      {renderPage()}
      <footer class="text-center mt-5 pt-4 border-top">
      <p class="mb-0">© 2025 Multi-Calculator App. Developed with ❤️ by Saksham Kaloo.</p>
    </footer>
    </div>
  );
}
