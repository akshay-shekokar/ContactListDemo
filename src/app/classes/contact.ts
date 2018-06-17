export class Contact {
    private _firstName: string;
    private _lastName: string;
    private _phoneNumber: number;
    private _email: string;
    private _status: boolean;
    private _selected: boolean;

    constructor(firstName: string, lastName: string, phoneNumber: number, email: string, status: boolean) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
        this._email = email;
        this._status = status;
        this._selected = false;
    }

    public set firstName(value) {
        this._firstName = value;
    }
    public set lastName(value) {
        this._lastName = value;
    }
    public set phoneNumber(value) {
        this._phoneNumber = value;
    }
    public set email(value) {
        this._email = value;
    }
    public set status(value) {
        this._status = value;
    }
    public set selected(value) {
        this._selected = value;
    }

    public get firstName() {
        return this._firstName;
    }
    public get lastName() {
        return this._lastName;
    }
    public get phoneNumber() {
        return this._phoneNumber;
    }
    public get email() {
        return this._email;
    }
    public get status() {
        return this._status;
    }
    public get selected() {
        return this._selected;
    }
}
