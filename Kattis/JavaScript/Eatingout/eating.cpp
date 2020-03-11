#include<iostream>


using namespace std;

int main() {
    const int arrsize =4;
    int holder[arrsize], sum = 0;

    cin >> holder[0] >> holder[1] >> holder[2] >> holder[3];
    sum = holder[1]+holder[2]+holder[3];

    if(sum <= holder[0]) {
        cout << "possible" << endl;
    } else {
        cout << "impossible" << endl;
    }
    return 0;
}