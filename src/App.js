import './App.css';

import React, { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [firstSectionsColor, setFirstSectionsColor] = useState('gray');
  const [secondSectionsColor, setSecondSectionsColor] = useState('gray');
  const [thirdSectionsColor, setThirdSectionsColor] = useState('gray');
  

  const checkPasswordStrength = (password) => {
  
    if (password.length === 0) {
       setFirstSectionsColor('gray');
      setSecondSectionsColor('gray');
      setThirdSectionsColor('gray');
    } else if (password.length < 8) {
      setFirstSectionsColor('red');
      setSecondSectionsColor('red');
      setThirdSectionsColor('red');
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /[0-9]/.test(password);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

      if (hasLetters && hasDigits && hasSymbols) {
        setFirstSectionsColor('green');
        setSecondSectionsColor('green');
        setThirdSectionsColor('green');
      } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        setFirstSectionsColor('yellow');
        setSecondSectionsColor('yellow');
        setThirdSectionsColor('gray');
      } else {
        setFirstSectionsColor('red');
        setSecondSectionsColor('gray');
        setThirdSectionsColor('gray');
      }
    }
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordStrength(newPassword);
  };

  return (
    <div className="App">
      <label htmlFor="password">Enter Password:</label>
      <input
        type="password"
        value={password}
        onChange={handleChange}
      />
      <div id="password-strength">
        <div className="strength-section"  style={{ backgroundColor: firstSectionsColor }}></div>
        <div className="strength-section"  style={{ backgroundColor: secondSectionsColor }}></div>
        <div className="strength-section"  style={{ backgroundColor: thirdSectionsColor}} ></div>
      </div>
    </div>
  );
}

export default App;