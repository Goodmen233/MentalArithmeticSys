package com.fiveonetwo.arithmetic.controller;

import com.fiveonetwo.arithmetic.entity.Score;
import com.fiveonetwo.arithmetic.entity.User;
import com.fiveonetwo.arithmetic.service.AdminService;
import com.fiveonetwo.arithmetic.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class AdminController {
    @Autowired
    private AdminService adminService;

//    用户信息
//    out：用户id、用户名、姓名、密码、性别、权限
    @RequestMapping("/getAllUser")
    @ResponseBody
    public Map<String, Object> getAllUser(){
        List<User> res = adminService.getAllUser();
        Map<String, Object> map = new HashMap<>();
        map.put("rows", res);
        map.put("code", 0);
        map.put("total", res.size());
        return map;
    }

//    修改用户信息
//    in：用户id、用户名、姓名、密码、性别、权限 out：1 or -1
    @PostMapping("/updateUser")
    @ResponseBody
    public int updateUser(int userId, String username, String name, String password, Boolean sex, Boolean authority){
        // 先判断用户名是否唯一
        User user = new User();
        user.setUsername(username);
        if(adminService.selectUser(user).size() != 0){
            return -1;
        }
        user.setId(userId);
        user.setPassword(password);
        user.setName(name);
        user.setSex(sex);
        user.setAuthority(authority);
        return adminService.updateUser(user);
    }

//    用户测试信息
//    out：测试序号、用户id、用户名、姓名、类型、成绩、时间
    @RequestMapping("/getAllUserScore")
    @ResponseBody
    public Map<String, Object> getAllUserScore(){
        List<Score> res =  adminService.getAllUserScore();
        Map<String, Object> map = new HashMap<>();
        map.put("rows", res);
        map.put("code", 0);
        map.put("total", res.size());
        return map;
    }

//    平均分
//    out:类型 平均分
    @RequestMapping("/getAvgScore")
    @ResponseBody
    public Map<String, Object> getAvgScore(){
        List<Score> res =  adminService.getAvgScore();
        Map<String, Object> map = new HashMap<>();
        map.put("rows", res);
        map.put("code", 0);
        map.put("total", res.size());
        return map;
    }
}
