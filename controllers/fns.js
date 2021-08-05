const TaskModel=require('../models/task')
const asyncWrap = require('../middleware/asyncHandler')
const {useErrorCreate,ErrorCreate}=require('../errorClass')
const getAllTasks=asyncWrap(async(req,res)=>{
        const tasks=await TaskModel.find({})
        res.status(200).json({tasks});
})

/*
catch(err){
       
        res.status(500).json({msg: err})
    }
*/
const createTask=asyncWrap(async (req,res)=>{
    
        const task = await TaskModel.create(req.body)
        res.status(201).json({task});
    
    
})

const getTask = asyncWrap(async(req,res,next)=>{
    
        const {id:TASKID}=req.params;
        const task=await TaskModel.findOne({_id:TASKID})
        
        if(!task){
            
            
            return next(useErrorCreate(`Record not found for id: ${TASKID}`,404))
        }
        res.status(200).json({task})
    
    
})

const updateTask=asyncWrap(async(req,res)=>{
    
        const {id:TASKID}=req.params;
        const task=await TaskModel.findOneAndUpdate({_id:TASKID},req.body,{
            new:true,
            runValidators:true
        })
        
        if(!task){
            return next(useErrorCreate(`Record not found for id: ${TASKID}`,404))
        }
        res.status(200).json({task})
    
})

const deleteTask=asyncWrap(async(req,res)=>{

        const {id:TASKID}=req.params;
        const task=await TaskModel.findOneAndDelete({_id:TASKID})
        
        if(!task){
            return next(useErrorCreate(`Record not found for id: ${TASKID}`,404))
        }
        res.status(200).json({task})
    
} )

module.exports={
getAllTasks,createTask,getTask,updateTask,deleteTask
};