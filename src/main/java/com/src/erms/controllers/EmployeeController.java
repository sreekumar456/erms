package com.src.erms.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.src.erms.model.Employee;

@Controller
public class EmployeeController {
	
//	public static final Logger logger=LoggerFactory.getLogger(EmployeeController.class);
	
	//Map top store employees -Use Database in real scenario
	Map <Integer,Employee> empData=new HashMap<Integer,Employee>();
	
	@RequestMapping(value=EmpRestURIConstants.DUMMY_EMP,method=RequestMethod.GET)
	public @ResponseBody Employee getDumyEmployee(){
//		logger.info("Inside Dummy method");
		Employee emp=new Employee();
		emp.setId(1);
		emp.setName("sree");
		emp.setCreatedDate(new Date());
		empData.put(emp.getId(), emp);
		return emp;		
	}
	@RequestMapping(value=EmpRestURIConstants.GET_EMP,method=RequestMethod.GET)
	public @ResponseBody Employee getEmployee(@PathVariable("id") int empId){
//		logger.info("Start getEmployee. ID="+empId);
        
        return empData.get(empId);		
		
	}
	public @ResponseBody List<Employee> getAllEmployees() {
//        logger.info("Start getAllEmployees.");
        List<Employee> emps = new ArrayList<Employee>();
        Set<Integer> empIdKeys = empData.keySet();
        for(Integer i : empIdKeys){
            emps.add(empData.get(i));
        }
        return emps;
    }
     
    @RequestMapping(value = EmpRestURIConstants.CREATE_EMP, method = RequestMethod.POST)
    public @ResponseBody Employee createEmployee(@RequestBody Employee emp) {
//        logger.info("Start createEmployee.");
        emp.setCreatedDate(new Date());
        empData.put(emp.getId(), emp);
        return emp;
    }
     
    @RequestMapping(value = EmpRestURIConstants.DELETE_EMP, method = RequestMethod.PUT)
    public @ResponseBody Employee deleteEmployee(@PathVariable("id") int empId) {
//        logger.info("Start deleteEmployee.");
        Employee emp = empData.get(empId);
        empData.remove(empId);
        return emp;
    }

}
