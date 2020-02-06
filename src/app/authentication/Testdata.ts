import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
    createDb() {
        let RegisterDetails = [
            { id: 1, fullName: 'ashutosh', Emailid: 'As7640733@gmail.com', userpassword: '12345678', mobileno: '7905124092' },
        ];
        return { register: RegisterDetails };
    }
}
