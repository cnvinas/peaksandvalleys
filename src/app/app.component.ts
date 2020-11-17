import { ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'landsOfPeaksAndValleys';

  peaks = 0;
  peaksList: number[] = [];
  valleys = 0;
  valleysList: number[] = [];
  printPeaks = "Print Peaks";
  printValleys = "Print Valleys";

  constructor(private cdRef:ChangeDetectorRef) {}

  castlesInAland = () => {
    //write a function that reads that array and returns the number of
    //castles that Aequilibrium should build on that stretch of land
    //and provide a way to test it.
  };

  buildACastle = (arr: number[]) => {
    const landArray: number[] = arr.length > 1 ? arr : [];

    //You can always build a castle at the start of the array, provided it is non-empty
    const checkValleys = (landArray: number[], valleys: number, valleysList: number[]) => {
      let lastValley: number;

      const addValley = (land: number, valleys: number, valleysList: number[]) => {
        valleys++;
        lastValley = land;
        valleysList.push(land);
      };

      landArray.forEach((land, index, array) => {
        if (index === 0 && land < array[index + 1]) {
          //check initial value
          addValley(land, valleys, valleysList);
        } else if (index === array.length - 1 && land < array[index - 1]) {
          //check last value
          addValley(land, valleys, valleysList);
        } else if (
          //check middle value
          (land < array[index - 1] && land < array[index + 1]) ||
          (land < array[index - 1] && land === array[index + 1]) ||
          (land !== lastValley &&
            land === array[index + 1] &&
            land < array[index + 2])
        ) {
          addValley(land, valleys, valleysList);
        }
      });

      this.printValleys = "ValleysList: " + valleysList + " Total of valleys: " + valleys;
      console.log(
        "ValleysList: " + valleysList + " Total of valleys: " + valleys
      );
      this.cdRef.detectChanges();
    };

    const checkPeaks = (landArray: number[], peaks: number, peaksList: number[]) => {
      let lastPeak: number;
      const addPeak = (land: number, peaks: number, peaksList: number[]) => {
        peaks++;
        lastPeak = land;
        peaksList.push(land);
      };

      landArray.forEach((land, index, array) => {
        if (index === 0 && land > array[index + 1]) {
          //check initial value
          addPeak(land, peaks, peaksList);
        } else if (index === array.length - 1 && land > array[index - 1]) {
          //check last value
          addPeak(land, peaks, peaksList);
        } else if (
          //check middle value
          (land > array[index - 1] && land > array[index + 1]) ||
          (land > array[index - 1] && land === array[index + 1]) ||
          (land !== lastPeak &&
            land === array[index + 1] &&
            land > array[index + 2])
        ) {
          addPeak(land, peaks, peaksList);
        }
      });

      this.printPeaks = "PeaksList: " + peaksList + " Total of peaks: " + peaks;
      console.log("PeaksList: " + peaksList + " Total of peaks: " + peaks);
      this.cdRef.detectChanges();
    };

    landArray
      ? checkValleys(landArray, this.valleys, this.valleysList)
      : console.log("Please provide a larger set of lands");

    landArray
      ? checkPeaks(landArray, this.peaks, this.peaksList)
      : console.log("Please provide a larger set of lands");
  };

  /* 
  You can make the following assumptions:
  ● You can always build a castle at the start of the array, provided it is non-empty
  ● You can always build a castle at the end of the array, provided it is non-empty
  ● We only want to build one castle per peak or valley.
  ● A peak is an integer or series of integers that is above the immediately preceding and following
  ints. For example, in the sequence [2,6,6,6,3] the sequence of three 6s is a peak.
  ● A valley is an integer or series of integers that is below the immediately preceding and
  following ints. For example, in the sequence [6,1,4] the "1" would be a valley. */
}
