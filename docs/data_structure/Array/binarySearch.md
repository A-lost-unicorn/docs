---
title: 1. 704. 二分查找
---
# 704. 二分查找
[力扣链接](https://leetcode.cn/problems/binary-search/)

给你一个升序数组nums和一个目标值target，返回目标值target在数组nums中的下标，如果不存在则返回-1

## 思路  
1、二分法，逐渐缩小范围，确定目标值的范围  

2、中间值比目标值大，即右边的值要缩小到原来中间的值  

3、中间值比目标值小，即左边的值要缩小到原来中间的值

## java代码
~~~java
class Solution {
    public int search(int[] nums, int target) {
        int left=0;
        int right=nums.length-1;

        while(left<=right){
            int middle=( left + right ) /2;

            if(nums[middle] > target){right = middle - 1;}     
            
            if(nums[middle] < target){left = middle + 1;}

            if(nums[middle] == target){return middle;}
        }
        return -1;
    }
}
~~~