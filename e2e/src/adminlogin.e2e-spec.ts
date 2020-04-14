import { browser, protractor } from 'protractor';
import { AdminLoginPage } from './adminlogin.po';
import { AdminService } from 'src/app/services/admin-service/admin.service';

describe('AdminLogin Page', () => {
    const mainPage: AdminLoginPage = new AdminLoginPage();

    beforeEach(() => {
        mainPage.navigateTo();
        // let adminService: AdminService;
        // this.adminService.getAllAdmins().subscribe(allAdmins => {
        //     this.admins = allAdmins;
        //     this.chosenAdmin = this.admins[0];
        // });
    });

    it('should display admin ids', () => {
        expect(mainPage.getAdminId()).toEqual('1');
    });
});
