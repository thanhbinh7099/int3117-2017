const time = 2000
describe("kiểm tra combo-box nghề nghiệp", function(){
	 	beforeEach(function(){
			cy.visit('/signin')
			cy.get("input[name=email]").type('admin_agency_10@gmail.com')
			cy.get("input[name=password]").type('Methadone@2017')
			cy.get("button[type=submit]").click()
		})
	
	
		it("kiểm tra giá trị mặc định: Vui lòng chọn", function(){
			cy.wait(time)
			cy.visit("/main/patients/new")
        		cy.get("label").contains("Nghề nghiệp").next().find('a.select2-choice').should('have.attr', 'placeholder', '-- Vui lòng chọn --')	
		})
	
})






























			
