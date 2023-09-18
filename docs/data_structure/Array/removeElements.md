---
title:  27. 移除元素
---
[[toc]]
# 27. 移除元素
[力扣链接](https://leetcode.cn/problems/remove-element/)

给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

>输入：nums = [3,2,2,3], val = 3  
输出：2, nums = [2,2]  
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。



## 思路  
1、利用**快慢指针**解决  
2、快指针负责筛选出需要的数值  
3、慢指针负责接住快指针传过来的值
## 双指针法
+ 新数组是由删除目标值后的元素组成的数组。慢指针指向新数组的元素，一旦获取到所需的元素，就需要将其赋给新数组。  
+ 新数组的下标值，也就是需要更新的下标，即慢指针的位置。这样，当快指针获取到值后，可以将其赋给慢指针。  
+ 这样这些操作都会在同一个数组上进行。
~~~java
class Solution {
    public int removeElement(int[] nums, int val) {
        int slowIndex=0;
        for(int fastIndex=0; fastIndex<nums.length; fastIndex++){
           if(nums[fastIndex] != val){
               nums[slowIndex] = nums[fastIndex];
               slowIndex++;
           }         
        }
        return slowIndex;
    }
}
~~~