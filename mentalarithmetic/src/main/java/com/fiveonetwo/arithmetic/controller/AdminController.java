package com.fiveonetwo.arithmetic.controller;

import com.fiveonetwo.arithmetic.entity.Score;
import com.fiveonetwo.arithmetic.entity.User;
import com.fiveonetwo.arithmetic.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
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
    public String updateUser(int userId, String username, String name, String password, Boolean sex, Boolean authority){
        // 先判断用户名是否已经存在
        User user = new User();
        user.setUsername(username);
        List<User> users = adminService.selectUser(user);
        // 如果用户名存在
        if(users.size() != 0){
            User user0 = users.get(0);// 获取当前用户名的用户
            // 如果用户名和姓名不一致则判断是用户名重名，修改失败
            if(! name.equals(user0.getName())){
                return "用户名已存在，请重新修改";
            }
        }
        user.setId(userId);
        user.setPassword(password);
        user.setName(name);
        user.setSex(sex);
        user.setAuthority(authority);
        int i = adminService.updateUser(user);
        if(i == 1){
            return "修改成功";
        }else{
            return "修改失败，请重试";
        }
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
