function readmeGenerator(answers) {
  let content = `
# WELCOME TO MY BOOTCAMP ASSIGNMENT REPO!

# Hi!... I'm Code Sleep 

## About Me

I'm a front end developer...

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://codesleeps.github.io/Bootstrap-Portfolio/)

![logo001](https://user-images.githubusercontent.com/125808990/236808958-deddef64-0c3e-4e5b-92ce-84166aa87fc6.png)


👩‍💻 I'm currently working on...React UI

🧠 I'm currently learning..._Python_ _MongoDB_ _PHP_ _Next.JS_ 

👯‍♀️ I'm looking to collaborate on...any A.I. Projects

🤔 I'm looking for help with...github actions

💬 Ask me about...Travel, manufacturing or design

📫 How to reach me...links below

⚡️ Fun fact...keep smiling 🤖

![Visitor Count](https://profile-counter.glitch.me/codesleeps/count.svg)

<img src='./assets/IMAGES/fire.png' alt='alt text' title='fire line' height='100%' width='50%'>


  # Title:
  ${answers.title}
  
  ## License:
  ${answers.license}

  ## Username:
  ${answers.username}

  ### Logo
  ${answers.logo}

  ## Email:
  ${answers.email}

  ## Description:
  ${answers.description}

  ## Usage:
  ${answers.usage}

  ## Installation:
  ${answers.installation}

  ## Learn:
  ${answers.learn}

  ## Test:
  ${answers.test}

  ## Contributing:
  ${answers.contributing}

  ## Additional Resources:
  ${answers.resources}

  THANK YOU FOR READING THIS REPO PLEASE VISIT AGAIN FOR MY LATEST PROJECTS!
  `;
  return content;
}

module.exports = readmeGenerator;
