const controller = {}



controller.getAll = async (req, res) =>{
    try {
        console.log("jelomadafaka")
        res.status(200)
    } catch (error) {
        console.log("[USER CONTROLLER GETALL ERROR] ", error)
        res.status(500)
    }



}

controller.post = async (req, res) =>{
    try {
        
        res.status(201)
    } catch (error) {
        console.log("[USER CONTROLLER POST ERROR] ", error)
        res.status(500)
    }



}

controller.update = async (req, res) =>{
    try {
        
        res.status(200)
    } catch (error) {
        console.log("[USER CONTROLLER UPDATE ERROR] ", error)
        res.status(500)
    }



}

controller.deleteByID = async (req, res) =>{
    try {
        
        res.status(200)
    } catch (error) {
        console.log("[USER CONTROLLER DELETEBYID ERROR] ", error)
        res.status(500)
    }



}

module.exports = controller



































