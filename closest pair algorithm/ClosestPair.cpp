#include <bits/stdc++.h>
using namespace std;

class Point
{
public:
    int x, y;
};

bool compareTwoPointX(Point point1, Point point2)
{
    return (point1.x < point2.x);
}

bool compareTwoPointY(Point point1, Point point2)
{
    return (point1.y < point2.y);
}

void print(Point points[])
{
    for (int i = 0; i < 100; i++)
    {
        cout << points[i].x << " " << points[i].y << endl;
    }
}

float min(float a, float b)
{
    return (a < b) ? a : b;
}

float distance(Point point1, Point point2)
{
    return sqrt(pow((point2.x - point1.x), 2) + pow((point2.y - point1.y), 2));
}

float closestPair(Point points[], int size)
{
    if (size <= 3)
    {
        float min = FLT_MAX;
        for (int i = 0; i < size; i++)
            for (int j = i + 1; j < size; j++)
                if (distance(points[i], points[j]) < min)
                    min = distance(points[i], points[j]);

        return min;
    }

    int mid = size / 2;
    Point middle = points[mid];

    float left = closestPair(points, mid);
    float right = closestPair(points + mid, size - mid);

    float smallest_distance = min(left, right);

    return smallest_distance;
}

float middleClosest(Point middlePoints[], int size, float smallest_distance)
{
    float min = smallest_distance;

    sort(middlePoints, middlePoints + size, compareTwoPointY);

    for (int i = 0; i < size; ++i)
        for (int j = i + 1; j < size && (middlePoints[j].y - middlePoints[i].y) < min; ++j)
            if (distance(middlePoints[i], middlePoints[j]) < min)
                min = distance(middlePoints[i], middlePoints[j]);

    return min;
}

float middlePoints(Point points[], int size, int smallest_distance)
{
    Point mid = points[size / 2];

    Point middlePoints[size];
    int j = 0;
    for (int i = 0; i < size; i++)
        if (abs(points[i].x - mid.x) < smallest_distance)
        {
            middlePoints[j] = points[i];
            j++;
        }

    return middleClosest(middlePoints, j, smallest_distance);
}

int main()
{
    srand((unsigned int)time(0));
    Point randomPoints[100];

    for (int i = 0; i < 100; i++)
    {
        randomPoints[i].x = rand() % 100;
        randomPoints[i].y = rand() % 100;
    }

    sort(randomPoints, randomPoints + 100, compareTwoPointX);
    print(randomPoints);

    float smallest = closestPair(randomPoints, 100);
    float middle_smallest = middlePoints(randomPoints, 100, smallest);

    if (smallest < middle_smallest)
        cout << smallest;
    else
        cout << middle_smallest;

    return 0;
}
