import { Employer } from "./models/employer";

export const resolvers = {
    Query: {
        getEmployers: async() => await Employer.find({}),
        getEmployer: async(parent, args) => {
            return await Employer.findById(args.id);
        }
    },
    Mutation: {
        createEmployer: async(_, {name , contactNO, address, department}) => {
            const employer = new Employer({name, contactNO, address, department});
            await employer.save();
            return employer;
        },
        updateEmployer: async(parent, args) => {
            if (!args.id) return;
            return await Employer.findOneAndUpdate(
                {
                _id: args.id
                },
                {
                    $set: {
                        name: args.name,
                        contactNO: args.contactNO,
                        address: args.address,
                        department: args.department
                    }
                }, {new: true}, (err, Employer) => {
                    if(err){
                        console.log("Something went wrong when updating the Employer")
                    }else {
                        
                    }
                }
            );
        },
        deleteEmployer: async(parent, args) => {
            if (!args.id) return;
            return await Employer.findByIdAndDelete(args.id)
        }
    }
}