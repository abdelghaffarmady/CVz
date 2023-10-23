
it("Copmlete JobSeeker Profile",()=>{
    cy.get("label[id='continue-step2']").click()
    cy.get("input[formcontrolname='birthDate']").type("27/02/1995")
    cy.get("input[id=؛attachementFileStorageName']").selectFile('cypress/fixtures/files/jobSeekerPhoto.png')
    cy.get("input[formcontrolname='linkedIn']").type("https://www.linkedin.com/in/abd/")
    cy.get("input[formcontrolname='birthDate']").type("27/02/1995")
    cy.get("input[id='cvAttachementFileStorageName']").selectFile("cypress/fixtures/files/jobSeekerCv.pdf")
    cy.get("input[id='vedioAttachementFileStorageName']").selectFile("cypress/fixtures/files/jobSeekerVideo.mp4")
    cy.get("ng-multiselect-dropdown[formcontrolname='formcontrolname='titlesView']").click().select("engineer").check()
    cy.get("ng-multiselect-dropdown[formcontrolname='specializationsView']").click().select("Medicine").check()
    cy.get("select[formcontrolname='jobLevelId']").select("Mid Career")
    cy.get("select[formcontrolname='yearsExperienceId']").select("2-5 years")
    cy.get("ng-multiselect-dropdown[formcontrolname='qualificationsView']").click().select("Bachelor's Degree").check()
    cy.get("ng-multiselect-dropdown[formcontrolname='skillsView']").click().select('Communication Skills').check()
    cy.get("textarea[formcontrolname='summary']").type("In publishing and graphic design Lorem ipsum is a placeholder text commonly used to demonstrate  a placeholder before final copy is available")
    cy.contains("Save").click() 
    cy.url().should("contain","/auth/payment-package")

    //Package Step
    cy.contains("3weeks").click()
    cy.get("button[class='ng-star-inserted']").click()
    cy.get("input[id='email']").type("abdelghaffarmady@gmail.com")
    cy.get("input[id='card_number']").type("4111 1111 1111 1111")
    cy.get("input[id='cc-exp']").type("12 / 23")
    cy.get("input[id='cc-csc']").type("123")
    cy.get('button[id="submitButton"]').click()
    cy.url().should("contain","/client/edit-job-seeker ")
        
});