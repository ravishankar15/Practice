class Member {
	constructor (private fName:string, private lName: string){}

	GetMemberName(): string {
		return this.fName + "..." + this.lName
	}

}

export { Member }
