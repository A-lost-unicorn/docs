---
title:  977. 有序数组的平方
---
[[toc]]
# 977. 有序数组的平方
[力扣链接](https://leetcode.cn/problems/squares-of-a-sorted-array/)

给你一个按 **非递减顺序** 排序的整数数组`nums`，返回 **每个数字的平方** 组成的新数组，要求也按 **非递减顺序** 排序。

>输入：nums = [-4,-1,0,3,10]  
输出：[0,1,9,16,100]  
解释：平方后，数组变为 [16,1,0,9,100]  
排序后，数组变为 [0,1,9,16,100]



## 思路  
1、当一个负数被平方时，它的值会变得更大，这是因为负数的平方等于它的绝对值。因此，当我们处理这种情况时，我们通常会看到一个趋势，即**两端的值较大，而中间的值较小**。在这种情况下，我们可以考虑**双指针**的方法来处理
## 双指针法
定义一个新数组result，和A数组一样的大小，让k指向result数组终止位置。

如果`A[i] * A[i] < A[j] * A[j]` 那么`result[k--] = A[j] * A[j]`; 。

如果`A[i] * A[i] >= A[j] * A[j]` 那么`result[k--] = A[i] * A[i]`; 。
~~~java
class Solution {
    public int[] sortedSquares(int[] nums) {
        int left = 0;
        int right = nums.length - 1;
        int[] result = new int[nums.length];//建立一个新数组
        int index = result.length - 1;//注意此时的index值取最大值

        while(left <= right){ //不遗漏最中间的元素
            if(nums[left] * nums[left] > nums[right] * nums[right]){
                result[index] = nums[left] * nums[left];
                index--;//题目要求从小到大 下标从大到小
                left++;
            }
            else{
                result[index] = nums[right] * nums[right];
                index--;
                right--;
            }
        }
        return result;
    }
}
~~~