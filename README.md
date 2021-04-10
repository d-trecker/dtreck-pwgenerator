# Challenge 3 Password Generator

Title: Javascript Challenge 3: Password Generator </br>
Student: Dylan Trecker</br>
Description: A Random Password Generator.</br>
Site Link: https://d-trecker.github.io/dtreck-pwgenerator/ </br>
Full Repository: https://github.com/d-trecker/dtreck-pwgenerator.git </br>
Get the repository by: $ git clone git@github.com:d-trecker/dtreck-pwgenerator.git </br>

User Story </br>
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

Acceptance Criteria </br>
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

-Created series of prompts for password criteria.

WHEN prompted for password criteria
THEN I select which criteria to include in the password

-Made prompts ask for user criteria.

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

-Made prompt to ask for a password of at least 8 characters and no more than 128 characters.

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters

-Created prompts to ask for lowercase, upercase, numeric, and special character choice.

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

-Created script to validate and choose character types user selected. If not validated with at least one character type, the user will have to retry.

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

-Verified that password genereated matches the selected criteria.

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

-Password is displayed on the page when created.
</br>
</br>
</br>
</br>

Grading Requirements
This challenge is graded based on the following criteria:

Satisfies all of the above acceptance criteria plus the following:

The Challenge should not produce any errors in the console when you inspect it using Chrome DevTools.

Application deployed at live URL.

Application loads with no errors.

Application GitHub URL submitted.

GitHub repository that contains application code.

Application user experience is intuitive and easy to navigate.

Application user interface style is clean and polished.

Application resembles the mock-up functionality provided in the Challenge instructions.

Repository has a unique name.

Repository follows best practices for file structure and naming conventions.

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages.

Repository contains quality README file with description, screenshot, and link to deployed application.
